const responses = {
    "hi": "Hello!",
    // Add more responses as needed
  };

  // Template questions
  const templateQuestions = ["How can I help you?", "What do you need assistance with?", "Is there anything specific you would like to know?"];

  // Function to add a message to the chat container
  function addMessage(message, isUser) {
    const container = document.getElementById('chat-messages');
    const className = isUser ? 'user-message' : 'bot-message';
    const div = document.createElement('div');
    div.textContent = message;
    div.classList.add('chat-message', className);
    container.appendChild(div);
    // Scroll to the bottom of the chat container
    container.scrollTop = container.scrollHeight;
  }

  // Function to handle user input
  function handleUserInput(input) {
    addMessage(input, true); // Add user message to the chat container
    const response = responses[input.toLowerCase()];
    if (response) {
      addMessage(response, false); // Add bot response to the chat container
    } else {
      addMessage("I'm sorry, I didn't understand that. Can you please rephrase?", false); // Default bot response for unrecognized input
    }
  }

  // Function to display template questions
  function displayTemplateQuestions() {
    const suggestionContainer = document.getElementById('suggestion-container');
    templateQuestions.forEach(question => {
      const span = document.createElement('span');
      span.textContent = question;
      span.classList.add('suggestion-item');
      span.addEventListener('click', () => {
        handleUserInput(question); // Handle user input when a template question is clicked
      });
      suggestionContainer.appendChild(span);
    });
  }

  // Display template questions when the page loads
  window.onload = displayTemplateQuestions;

  // Event listener for user input
  document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const userInput = event.target.value.trim();
      if (userInput !== '') {
        handleUserInput(userInput);
        event.target.value = ''; // Clear the input field after handling user input
      }
    }
  });

  // Function to show/hide the chatbot
  function toggleChatbot() {
    var chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
  }

  // Store original position and size values
  var originalButtonBottom = '200px'; // Adjust as needed
  var originalButtonRight = '80px'; // Adjust as needed
  var originalButtonWidth = '130px'; // Adjust as needed
  var originalButtonHeight = '150px'; // Adjust as needed
  var originalIconWidth = '100px'; // Adjust as needed
  var originalIconHeight = '100px'; // Adjust as needed

  // Function to adjust chatbot button position and size on page scroll
  window.onscroll = function() {
    var chatbotButton = document.querySelector('.chatbot-button');
    var chatbotIcon = document.getElementById('chatbot-icon');
    if (window.scrollY > 100) { // Adjust this value as needed
      chatbotButton.style.transition = 'all 0.3s ease-in-out';
      chatbotButton.style.bottom = '40px';
      chatbotButton.style.right = '20px';
      chatbotButton.style.width = '90px';
      chatbotButton.style.height = '105px';
      chatbotIcon.style.transition = 'all 0.3s ease-in-out';
      chatbotIcon.style.width = '20px'; // Adjust as needed
      chatbotIcon.style.height = '20px'; // Adjust as needed
      chatbotButton.style.textContent='hidden';
    } else {
      chatbotButton.style.transition = 'all 0.3s ease-in-out';
      chatbotButton.style.bottom = originalButtonBottom;
      chatbotButton.style.right = originalButtonRight;
      chatbotButton.style.width = originalButtonWidth;
      chatbotButton.style.height = originalButtonHeight;
      chatbotIcon.style.transition = 'all 0.3s ease-in-out';
      chatbotIcon.style.width = originalIconWidth;
      chatbotIcon.style.height = originalIconHeight;
    }
  };