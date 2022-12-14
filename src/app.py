from flask import Flask ,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
#from model import setup_db, Articles, db_drop_and_create_all
#from project import app, db
app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend
# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://MatiasLasorsa:chessmati44@MatiasLasorsa.mysql.pythonanywhere-services.com/MatiasLasorsa$default'
# desde el objeto app configuro la URI de la BBDD    user:clave@localhost/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)
app.debug = True

# defino la tabla
class Glosario(db.Model):   # la clase Producto hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    definicion=db.Column(db.String(200))
   
    def __init__(self,nombre,definicion):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.definicion=definicion
       
with app.app_context():
    db.create_all()  # crea las tablas

#  ************************************************************
class GlosarioSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','definicion')
definicion_schema=GlosarioSchema()            # para crear un producto
definiciones_schema=GlosarioSchema(many=True)  # multiples registros
 
# crea los endpoint o rutas (json)
@app.route('/glosario',methods=['GET'])
def get_Productos():
    all_definiciones=Glosario.query.all()     # query.all() lo hereda de db.Model
    result=definiciones_schema.dump(all_definiciones)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 
@app.route('/glosario/<id>',methods=['GET'])
def get_producto(id):
    definicion=Glosario.query.get(id)
    return definicion_schema.jsonify(definicion)

@app.route('/glosario/<id>',methods=['DELETE'])
def delete_definicion(id):
    definicion=Glosario.query.get(id)
    db.session.delete(definicion)
    db.session.commit()
    return definicion_schema.jsonify(definicion)

@app.route('/glosario', methods=['POST']) # crea ruta o endpoint
def create_definicion():
    app.logger.info(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    definicion=request.json['definicion']
    
    new_definicion=Glosario(nombre,definicion)
    db.session.add(new_definicion)
    db.session.commit()
    return definicion_schema.jsonify(new_definicion)

@app.route('/glosario/<id>' ,methods=['PUT'])
def update_definicion(id):
    concepto=Glosario.query.get(id)
    app.logger.error("concepto: " + str(concepto))
    app.logger.error("concepto.descripcion" + str(vars(concepto)))
    app.logger.error("request: " + str(request))
    app.logger.error("request.json: " + str(request.json))

    concepto.nombre=request.json['nombre']
    concepto.definicion=request.json['definicion']

    app.logger.error("concepto (mod): " + str(concepto))
    db.session.commit()
    return definicion_schema.jsonify(concepto)
 
# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)