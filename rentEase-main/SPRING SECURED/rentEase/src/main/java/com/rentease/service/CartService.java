package com.rentease.service;

import java.util.List;

import com.rentease.dto.AddProductDTO;
import com.rentease.dto.CartItemDTO;
import com.rentease.entities.Cart;

public interface CartService {
//	Cart addProductToCart(Long lesseeId , Long productId);
	public void addProductToCart(Long lesseeId, AddProductDTO dto);
    
	//get cart items
		public List<CartItemDTO> getAllCartItems(Long cartId);

		// method to calculate total price
		public double calculateTotalCartPrice(Long cartId);
}
