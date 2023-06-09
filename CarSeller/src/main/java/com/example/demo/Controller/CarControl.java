package com.example.demo.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.CarModel;
import com.example.demo.Model.VerifyModel;
import com.example.demo.Service.CarService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class CarControl {
	@Autowired
	private CarService service;
	@Tag(name = "Signin", description = "Login Endpoint")
	@PostMapping("/Signin")
	private String Login(@RequestBody Map<String, String> xLogin) {
	    String username = xLogin.get("username");
	    String password = xLogin.get("password");
	    String result = service.Login(username, password);
	    return result;
	}

	@Tag(name = "Signup", description = "Signup Endpoint")
    @PostMapping("/Signup")
    public String Signup(@RequestBody VerifyModel user) {
        return service.Signup(user);
    }
	
	@Tag(name = "List Cars", description = "List All Cars")
	@GetMapping("/list")
	private List<CarModel> Cars(){
		return service.getData();
	}
	
	@Tag(name = "Sort Car by ID", description = "View Car Data")
	@GetMapping("/data/{id}")
	private Optional<CarModel> viewCar(@PathVariable Long id) {
		return service.findbyID(id);
	}
	
	
	@Tag(name = "Add Car", description = "Add New Car")
	@PostMapping("/add")
	private CarModel addCar(@RequestBody CarModel data) {
		return service.addData(data);
	}
	
	@Tag(name = "Edit Car", description = "Edit Existing Car")
	@PutMapping("/edit/{id}")
	private CarModel editCar(@PathVariable Long id, @RequestBody CarModel data) {
		return service.editData(data, id);
	}
	
	@Tag(name = "Delete Data", description = "Delete The Existing Car")
	@DeleteMapping("/delete/{id}")
	private String deleteCar(@PathVariable Long id) {
		return service.deleteData(id);
	}
}
