package net.javaguides.auth.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Account_Users")
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "userName")
	private String userName;

	@Column(name = "password")
	private String password;

	public Account() {

	}

	public Account(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String firstName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
