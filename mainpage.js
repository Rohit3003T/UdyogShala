document.getElementById('calculationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var initialInvestmentRange = document.getElementById('initialInvestmentRange').value;
    var netProfitPerCandle = parseFloat(document.getElementById('netProfitPerCandle').value);
    var netAmountOfCandlesSoldPerDay = 300;

    // Extracting lower and higher investment values from the range
    var investmentValues = initialInvestmentRange.split(" to ");
    var lowerInvestment = parseFloat(investmentValues[0].replace("₹", "").replace(",", ""));
    var higherInvestment = parseFloat(investmentValues[1].replace("₹", "").replace(",", ""));

    var dailyProfit = netProfitPerCandle * netAmountOfCandlesSoldPerDay;
    var lowerTimeToRecoup = Math.ceil(lowerInvestment / dailyProfit);
    var higherTimeToRecoup = Math.ceil(higherInvestment / dailyProfit);

    document.getElementById('dailyProfit').innerText = 'Net Profit per Day: ₹' + dailyProfit.toFixed(2);
    document.getElementById('timeToRecoup').innerText = 'Time to Recoup Investment: Approximately ' + lowerTimeToRecoup + ' to ' + higherTimeToRecoup + ' days';
    
    document.getElementById('result').style.display = 'block';
  });


  var rawMaterialsData = [
    { name: "Wax", source: "Local suppliers or online distributors", example: "Check online platforms like Alibaba or Amazon for bulk wax purchases" },
    { name: "Fragrance Oils", source: "Local fragrance oil suppliers or essential oil distributors", example: "Explore fragrance oil options on websites like Bramble Berry or Natures Garden" },
    { name: "Wicks", source: "Wick manufacturers, local craft stores, or online suppliers", example: "Purchase wicks in bulk from online stores like CandleScience or Wooden Wick Co." },
    { name: "Dyes and Pigments", source: "Specialty stores or online retailers", example: "Order candle dyes and pigments from suppliers like Rustic Escentuals or Candlewic" },
    { name: "Molds", source: "Mold manufacturers, local craft stores, or online platforms", example: "Find a variety of candle molds on websites like Etsy or Alibaba" },
    { name: "Packaging Materials", source: "Packaging material suppliers or local markets", example: "Buy packaging materials in bulk from online distributors such as Uline or Packlane" },
    { name: "Labels and Tags", source: "Printing services or specialized label manufacturers", example: "Design and order custom labels from online platforms like Sticker Mule or Avery" },
    { name: "Adhesives and Glues", source: "Local hardware stores or adhesive suppliers", example: "Purchase suitable adhesives from online stores such as Gluegun or Amazon" },
    { name: "Containers or Jars (if applicable)", source: "Glassware suppliers or container manufacturers", example: "Find glass jars for candles on websites like Glassnow or Berlin Packaging" },
    { name: "Equipment and Tools", source: "Local suppliers or online marketplaces", example: "Purchase candle-making equipment from online platforms like Alibaba or CandleScience" }
  ];

  // Supply Chain Management data
  var supplyChainData = [
    { strategy: "Local Partnerships", description: "Build relationships with local suppliers for timely deliveries", example: "Establish connections with local distributors listed on business directories or trade shows" },
    { strategy: "Bulk Purchases", description: "Consider bulk purchasing for better pricing and stable supply", example: "Negotiate bulk deals with suppliers found on wholesale platforms like Bulk Apothecary or DHgate" },
    { strategy: "Diversify Suppliers", description: "Have multiple suppliers for critical raw materials to mitigate risks", example: "Identify backup suppliers for essential materials from different regions or sources" },
    { strategy: "Quality Control", description: "Regularly inspect and assess the quality of raw materials", example: "Implement quality control measures such as sample testing before making bulk purchases" },
    { strategy: "Storage and Inventory Management", description: "Implement effective inventory management practices", example: "Use inventory management software or platforms like Zoho Inventory or QuickBooks" },
    { strategy: "Sustainability Considerations", description: "Explore sustainable sourcing options for raw materials", example: "Seek eco-friendly options from suppliers specializing in sustainable materials" },
    { strategy: "Stay Informed", description: "Stay updated on industry trends and new suppliers", example: "Subscribe to industry newsletters or join online forums to stay informed about the latest trends and suppliers" }
  ];

  // Function to display raw materials data with animation
  function displayRawMaterials() {
    var rawMaterialsList = document.getElementById('rawMaterialsList');
    rawMaterialsData.forEach(function(material, index) {
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item resource-animated resource-fade-in-up';
      listItem.style.animationDelay = (index * 0.2) + 's'; // Delay animation for each item
      listItem.innerHTML = '<h5><strong>' + material.name + '</strong></h5><p><strong>Source:</strong> ' + material.source + '</p><p><strong>Example:</strong> ' + material.example + '</p>';
      rawMaterialsList.appendChild(listItem);
    });
  }

  // Function to display supply chain management data with animation
  function displaySupplyChainManagement() {
    var supplyChainList = document.getElementById('supplyChainList');
    supplyChainData.forEach(function(strategy, index) {
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item resource-animated resource-fade-in-up';
      listItem.style.animationDelay = (index * 0.2) + 's'; // Delay animation for each item
      listItem.innerHTML = '<h5><strong>' + strategy.strategy + '</strong></h5><p>' + strategy.description + '</p><p><strong>Example:</strong> ' + strategy.example + '</p>';
      supplyChainList.appendChild(listItem);
    });
  }

  // Call the display functions
  displayRawMaterials();
  displaySupplyChainManagement();

  var coll = document.getElementsByClassName("custom-collapsible");
  var content = document.getElementsByClassName("custom-content");
  
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  function showSentMessage() {
    event.preventDefault(); // Prevent default form submission
    var sentMessage = document.getElementById('sent-message');
    sentMessage.style.display = 'block'; // Display the "Your message has been sent" message
  }