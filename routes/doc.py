from routes import *


main = Blueprint('doc', __name__)


@main.route('/')
def index():
    return render_template('test.html')
