package net.javaguides.vendors.controller;

import net.javaguides.vendors.exception.ResourceNotFoundException;
import net.javaguides.vendors.model.Vendor;
import net.javaguides.vendors.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/")
public class VendorController {

    @Autowired
    private VendorRepository vendorRepository;

    // get all vendors
    @GetMapping("/vendors")
    public List<Vendor> getAllVendors(){
        return vendorRepository.findAll();
    }


    // create vendor rest api
    @PostMapping("/vendors")
    public Vendor createVendor(@RequestBody Vendor vendor) {
        return vendorRepository.save(vendor);
    }

    // get vendor by id rest api
    @GetMapping("/vendors/{id}")
    public ResponseEntity<Vendor> getVendorById(@PathVariable Long id) {
        Vendor vendor = vendorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor not exist with id :" + id));
        return ResponseEntity.ok(vendor);
    }

    // update vendor rest api

    @PutMapping("/vendors/{id}")
    public ResponseEntity<Vendor> updateVendor(@PathVariable Long id, @RequestBody Vendor vendorDetails){
        Vendor vendor = vendorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor not exist with id :" + id));

        vendor.setFirstName(vendorDetails.getFirstName());
        vendor.setLastName(vendorDetails.getLastName());
        vendor.setEmailId(vendorDetails.getEmailId());

        Vendor updatedVendor = vendorRepository.save(vendor);
        return ResponseEntity.ok(updatedVendor);
    }

    // delete vendor rest api
    @DeleteMapping("/vendors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVendor(@PathVariable Long id){
        Vendor vendor = vendorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor not exist with id :" + id));

        vendorRepository.delete(vendor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
