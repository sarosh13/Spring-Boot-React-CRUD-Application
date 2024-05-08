
package com.springboot.crud.dao;

import com.springboot.crud.model.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 *
 * @author miles
 */
@Repository
@Transactional
public class CrudDaoImpl {
    @PersistenceContext
    private EntityManager entityManager;
    
//    Constructor Injection
    @Autowired
    public CrudDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
    
    public void save(Product product){
        entityManager.persist(product);
    }
    
    public void update(Product product){
        entityManager.merge(product);
    }
    
    public void deleteById(Long id){
        entityManager.createQuery("DELETE FROM Product WHERE id= :id")
                .setParameter("id", id)
                .executeUpdate();
    }
    
    public List<Product> findAll(){
        return entityManager.createQuery("FROM Product p").getResultList();
    }
    
    public Product findById(Long id){
        return entityManager.find(Product.class, id);
    }
}
