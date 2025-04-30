package com.rentease.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rentease.custom_exceptions.NoBookingHistoryFoundException;
import com.rentease.custom_exceptions.ResourceNotFoundException;
import com.rentease.dao.BookingDao;
import com.rentease.dao.CartItemDao;
import com.rentease.dao.CategoryDao;
import com.rentease.dao.ProductDao;
import com.rentease.dao.UserDao;
import com.rentease.dto.ApiResponse;
import com.rentease.dto.AvailabilityCheckDTO;
import com.rentease.dto.BookingDTO;
import com.rentease.dto.OrderSummaryDTO;
import com.rentease.dto.ProductDTO;
import com.rentease.entities.Bookings;
import com.rentease.entities.Product;


@Service
@Transactional
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private ProductDao productDao;
   
	@Autowired
   private BookingDao bookingDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse checkProductAvailability(AvailabilityCheckDTO availabilityCheckDTO) {
		  // Fetch product by ID and check if it exists
        Product product = productDao.findById(availabilityCheckDTO.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

        // Check if product is in the requested city
        if (!product.getAvailableCity().equalsIgnoreCase(availabilityCheckDTO.getCity())) {
            return new ApiResponse("Product not available in the requested city");
        }

        // Check if there is any booking that overlaps with the requested dates
        boolean isAvailable = bookingDao
                .findBookingsByProductIdAndDates(availabilityCheckDTO.getProductId(),
                        availabilityCheckDTO.getStartDate(),
                        availabilityCheckDTO.getEndDate()).isEmpty();

        if (isAvailable) {
            return new ApiResponse("Product is available");
        } else {
            return new ApiResponse("Product is not available during the requested dates");
        }
	}
	
	 

	public List<BookingDTO> getBookingsForLessee(Long lesseeId) {
        List<Bookings> bookings = bookingDao.findByLesseeId(lesseeId);
        System.out.println(bookings);
        return bookings.stream()
                       .map((Bookings booking) -> mapper.map(booking, BookingDTO.class))
                       .collect(Collectors.toList());
    }



	@Override
	public OrderSummaryDTO getOrderSummary(Long lesseeId) {
		List<Bookings> bookings = bookingDao.findByLesseeId(lesseeId);
		
		 if (bookings == null) {
	            throw new  NoBookingHistoryFoundException("No bookings found for lessee with id " + lesseeId) ;
	        }
		
		double totalAmount = 0;
		List<ProductDTO> productDTOs = new ArrayList<>();
		
		
		for(Bookings booking : bookings) {
			totalAmount+= booking.getTotalPrice();
			
			
			Product product = booking.getProduct();
			if(product!=null) {
				ProductDTO productDTO = mapper.map(product, ProductDTO.class);
				
				productDTOs.add(productDTO);
			}
		}
		
		OrderSummaryDTO orderSummary = new  OrderSummaryDTO();
		orderSummary.setTotalAmount(totalAmount);
		orderSummary.setProducts(productDTOs);
		
		return orderSummary;
	}
	
	@Override
	public ApiResponse cancelBooking(Long bookingId) {
		Bookings booking = bookingDao.findById(bookingId)
				.orElseThrow(()-> new RuntimeException("Booking not found"));
		
		if(booking.getStartDate().toLocalDate().isBefore(LocalDate.now())) {
			return new ApiResponse("Booking cannot be cancelled as it is already started");
			
		}
		
		bookingDao.delete(booking);
		return new ApiResponse("Booking successfully cancelled") ;
	}
}
