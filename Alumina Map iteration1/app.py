from flask import Flask, render_template, request, flash,send_file
app = Flask(__name__)
app.secret_key = "i m the best"


@app.route('/')
def index():
    return render_template('index.html')








if __name__ == '__main__':
    app.run(debug=True)