
package com.springboot.crud.service;

import com.springboot.crud.model.Product;
import java.util.List;

/**
 *
 * @author miles
 */
public interface CrudService {
    
    Product saveProduct(Product product);
    List<Product> getAllProducts();
    Product updateProductById(Long id, Product product);
    String deleteProductById(Long id);
    Product getProductById(Long id);
}
