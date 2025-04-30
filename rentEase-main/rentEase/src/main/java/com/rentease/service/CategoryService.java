package com.rentease.service;

import com.rentease.dto.CategoryDTO;
import com.rentease.entities.Category;

public interface CategoryService {
	 CategoryDTO findCategoryByName(String categoryName);
	 
	 //adding a new category 
	 public String addCategory(CategoryDTO newCategoryDTO);
	 
	 //to check if the role of user is ADMIN
	 public boolean isAdmin(Long userId);
	 
	 public String deleteCategory(Long category_Id);
	 
	 public CategoryDTO updateCategory (Long userId, CategoryDTO category);

}
