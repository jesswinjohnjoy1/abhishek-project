package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cars")
public class CarModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long pid;
	private String carname;
	private String cartype;
	private float carprice;
	private float carkms;
	private String carimg;
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	public String getCarname() {
		return carname;
	}
	public void setCarname(String carname) {
		this.carname = carname;
	}
	public String getCartype() {
		return cartype;
	}
	public void setCartype(String cartype) {
		this.cartype = cartype;
	}
	public float getCarprice() {
		return carprice;
	}
	public void setCarprice(float carprice) {
		this.carprice = carprice;
	}
	public float getCarkms() {
		return carkms;
	}
	public void setCarkms(float carkms) {
		this.carkms = carkms;
	}
	public String getCarimg() {
		return carimg;
	}
	public void setCarimg(String carimg) {
		this.carimg = carimg;
	}
}

