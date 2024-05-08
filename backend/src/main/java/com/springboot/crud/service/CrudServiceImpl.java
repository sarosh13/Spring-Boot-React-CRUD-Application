
package com.springboot.crud.service;

import com.springboot.crud.dao.CrudDaoImpl;
import com.springboot.crud.model.Product;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author miles
 */
@Service
public class CrudServiceImpl implements CrudService{
    
    @Autowired
    private CrudDaoImpl crudDaoImpl;

    @Override
    public Product saveProduct(Product product) {
        crudDaoImpl.save(product);
        return product;
    }

    @Override
    public List<Product> getAllProducts() {
        return crudDaoImpl.findAll();
    }

    @Override
    public Product updateProductById(Long id,Product product) {
        Product prod = crudDaoImpl.findById(id);
        if (prod.getId() != null){
            prod.setName(product.getName());
            prod.setPrice(product.getPrice());
            prod.setQuantity(product.getQuantity());
            crudDaoImpl.update(prod); 
            return prod;
        }
        return null;
        
    }

    @Override
    public String deleteProductById(Long id) {
        crudDaoImpl.deleteById(id);
        
        if (crudDaoImpl.findById(id) != null){
            return "Not Deleted";
        }
        return "Deleted!";
    }

    @Override
    public Product getProductById(Long id) {
        return crudDaoImpl.findById(id);
    }
    
    
    
}
