// JS File to handle possible routes for Friend Finder App
// Developed by Fernando Zacarias

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Route to survey page 
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

// Displays all customers
app.get("/api/customers", function (req, res) {
    return res.json(customers);
});
