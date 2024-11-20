### **Project: API Testing Suite**  

📡 **A lightweight and comprehensive framework for API testing with Supertest and Axios**  

---

## 📖 **Overview**  
The **API Testing Suite** is designed to simplify the testing of RESTful APIs, ensuring their reliability, performance, and correctness. Built using **Supertest** and **Axios**, this framework enables developers and QA professionals to:  
- Validate API endpoints with ease.  
- Automate regression tests for REST APIs.  
- Generate detailed reports for test execution.  

---

## 💡 **Features**  
- **Request Testing:** Simplified HTTP request testing with **Supertest** and **Axios**.  
- **Custom Assertions:** Use popular assertion libraries like **Chai** or **Jest**.  
- **Parameterized Tests:** Data-driven test cases for maximum flexibility.  
- **Error Handling:** Automatically logs errors for failed test cases.  
- **Reporting:** Integration with **Allure Reports** for detailed test insights.  

---

## 🚀 **Setup and Usage**  

### **Prerequisites**  
- Node.js (v14 or higher)  
- NPM or Yarn  

### **Installation**  
```bash  
git clone https://github.com/kulish-automation/api-testing-suite.git  
cd api-testing-suite  
npm install  
```  

### **Running Tests**  
1. Add your test cases in the `tests` directory.  
2. Execute tests using:  
   ```bash  
   npm test  
   ```  

### **Generate Reports**  
```bash  
npm run report  
```  

---

## 🛠️ **Tech Stack**  
- **Supertest:** For easy HTTP assertions.  
- **Axios:** For handling advanced API interactions.  
- **Mocha:** For writing structured test cases.  
- **Chai:** For robust assertion handling.  
- **Allure:** For generating detailed and shareable test reports.  

---

## 📂 **Directory Structure**  
```
api-testing-suite/  
│  
├── tests/  
│   └── example.test.js  # Example API test case  
├── utils/  
│   └── requestHelper.js # Reusable functions for API calls  
├── reports/  
│   └── allure-results/  # Generated test reports  
├── package.json         # Dependencies and scripts  
└── README.md            # Project documentation  
```  

---

## 🤝 **Contributing**  
Contributions are welcome! To contribute:  
1. Fork this repository.  
2. Create a feature branch.  
3. Submit a pull request with a detailed description.  

---

## 📧 **Contact**  
For queries, feedback, or contributions, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/kulish-kulshrestha/).
