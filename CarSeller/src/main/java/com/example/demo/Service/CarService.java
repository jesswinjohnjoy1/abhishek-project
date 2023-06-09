package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.CarModel;
import com.example.demo.Model.VerifyModel;
import com.example.demo.Repository.CarRepo;
import com.example.demo.Repository.VerifyRepo;

@Service
public class CarService {
	@Autowired
	private CarRepo carrepo;
	@Autowired
	private VerifyRepo verifyrepo;
	public String Login(String username, String password) {
		VerifyModel xuser = verifyrepo.findByusername(username);
		if (xuser == null) {
			return "invalidusername";
		} else {
			if (xuser.getPassword().equals(password)) {
				return "success";
			} else {
				return "invalidpassword";
			}
		}
	}
	public String Signup(VerifyModel xuser) {
	    String username = xuser.getUsername();
	    VerifyModel authuser = verifyrepo.findByusername(username);
	    if (authuser == null) {
	        verifyrepo.save(xuser);
	        return "useradded";
	    } else {
	        return "existingusername";
	    }
	}
	public List<CarModel> getData() {
		return carrepo.findAll();
	}
	public CarModel addData(CarModel data) {
		return carrepo.save(data);
	}
	public CarModel editData(CarModel data, Long id) {
		CarModel edx = carrepo.findById(id).orElse(data);
		if (edx != null) {
			edx.setCarname(data.getCarname());
			edx.setCartype(data.getCartype());
			edx.setCarprice(data.getCarprice());
			edx.setCarkms(data.getCarkms());
			edx.setCarimg(data.getCarimg());
			return carrepo.saveAndFlush(edx);
		} else {
			return null;
		}
	}
	public String deleteData(Long id) {
		carrepo.deleteById(id);
		return "Deleted Successfully";
	}
	public Optional<CarModel> findbyID(Long id) {
		return carrepo.findById(id);
	}
}

