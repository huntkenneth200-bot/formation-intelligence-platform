from engine import process_scenario
from flask import Flask, render_template_string, request
import os

app = Flask(__name__)

HTML_PAGE = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bondage Breaker Books – Scenario Engine</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f7fa;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background: white;
            padding: 30px;
            width: 500px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        textarea {
            width: 100%;
            height: 120px;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 16px;
            resize: vertical;
        }
        button {
            margin-top: 15px;
            width: 100%;
            padding: 12px;
            background: #2d6cdf;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background: #1e4fb8;
        }
        .output {
            margin-top: 20px;
            padding: 15px;
            background: #eef2f7;
            border-radius: 8px;
            white-space: pre-wrap;
        }
    </style>
</head>
<body>
    <div class="card">
        <h2>Scenario Engine</h2>
        <form method="POST">
            <textarea name="scenario" placeholder="Type your scenario here..."></textarea>
            <button type="submit">Submit Scenario</button>
        </form>
        {% if output %}
        <div class="output">{{ output }}</div>
        {% endif %}
    </div>
</body>
</html>
"""

@app.route("/", methods=["GET", "POST"])
def home():
    output = None
    if request.method == "POST":
        scenario = request.form.get("scenario", "")
        # TODO: connect this to your engine logic
        output = output = process_scenario(scenario)
    return render_template_string(HTML_PAGE, output=output)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)