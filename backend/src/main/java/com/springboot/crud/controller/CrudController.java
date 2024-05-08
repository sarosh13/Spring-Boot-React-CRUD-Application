
package com.springboot.crud.controller;

import com.springboot.crud.model.Product;
import com.springboot.crud.service.CrudService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author miles
 */
//@Controller //return static page
//@ResponseBody //object return is serialized into JSON

@RestController // @Controller + @ResponseBody
@CrossOrigin
public class CrudController {
    
    @Autowired
    private CrudService crudService;
 
//    @RequestMapping(method = RequestMethod.GET, path="/hello")
//    @RequestMapping(value = "/products", method = RequestMethod.GET)
    @GetMapping(value = "/hello")
    public String helloWorld() {
        return "Hello World!";
    }
    
//    @PostMapping("/employee")
//    public Employee saveEmployee(@RequestBody Employee employee) {
//        return employeeService.saveEmployee(employee);
//    }
    
    @PostMapping("/products")
    public Product saveProduct(@RequestBody Product product){
        crudService.saveProduct(product);
        return product;
    }
    
    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable("id") Long id){
        return crudService.getProductById(id);
    }
    
    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return crudService.getAllProducts();
    }
    
    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable("id") Long id, @RequestBody Product product){
        crudService.updateProductById(id, product);
        return product;
    }
    
    @DeleteMapping("/products/{id}")
    public ResponseEntity deleteProduct(@PathVariable("id") Long id){
        String message = crudService.deleteProductById(id);
        return ResponseEntity.status(HttpStatus.OK).body(message);
    } 
    
    
}
