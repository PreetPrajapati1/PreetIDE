<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML/CSS/JS in One File</title>
    
    <!-- CSS: Defines how the page looks -->
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
            margin: 0;
        }
        .container {
            text-align: center;
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
        }
        button:hover {
            background-color: #0056b3;
        }
        #counter {
            font-size: 2rem;
            margin: 20px 0;
            color: #333;
        }
    </style>
</head>
<body>

    <!-- HTML: Defines the structure -->
    <div class="container">
        <h1>Click Counter</h1>
        <div id="counter">0</div>
        <button id="incrementBtn">Increase Count</button>
    </div>

    <!-- JavaScript: Defines the interactivity -->
    <script>
        // Select the HTML elements
        const counterDisplay = document.getElementById('counter');
        const button = document.getElementById('incrementBtn');

        let count = 0;

        // Add a click event listener to the button
        button.addEventListener('click', () => {
            count++;
            counterDisplay.textContent = count;
            
            // Log to console for debugging
            console.log("Current count is:", count);
        });
    </script>

</body>
</html>
