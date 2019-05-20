package br.com.idea.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.idea.model.Product;
import br.com.idea.repository.ProductRepository;

@RestController
@RequestMapping("products")
public class ProductEndPoint {

	private final ProductRepository productDAO;

	@Autowired
	public ProductEndPoint(ProductRepository productDAO) {
		this.productDAO = productDAO;
	}

	@GetMapping
	public ResponseEntity<?> getProduct() {
		return new ResponseEntity<>(productDAO.findAll(), HttpStatus.OK);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<?> getStudentById(@PathVariable("id") Long id) {
		Product student = productDAO.findById(id).get();
		return new ResponseEntity<>(student, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<?> saveProduct(@RequestBody Product product) {
		return new ResponseEntity<>(productDAO.save(product), HttpStatus.OK);
	}

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") Long id) {
		productDAO.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
