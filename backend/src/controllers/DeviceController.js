const connection = require('../database/connection');

module.exports = {


  async list (request,response){
    const devices = await connection('devices').join('parts', 'part_id', 'dev_part').select('*');
  
    return response.json(devices);
  },

  async devicesForParts(request, response){
      const {dev_part} = request.params;

      const devParts = await connection('devices')
      .join('parts', 'part_id', 'dev_part')
      .where('dev_part',dev_part)
      .select('*');

      return response.json(devParts );
  }, 

  async index(request, response){
      const {dev_id} = request.params;

      const device = await connection('devices')
      .where('dev_id', dev_id)
      .join('parts', 'part_id', 'dev_part')
      .select('*');

      return response.json(device );
  },

  async create (request, response){
    const { dev_name, dev_ip, dev_port, dev_status, dev_url, dev_part } = request.body;

    const [dev_id] = await connection('devices').insert({
      dev_name, 
      dev_ip, 
      dev_port,
      dev_status, 
      dev_url, 
      dev_part
    })

    return response.json( "Cadastrado com sucesso!" );
  },

  async delete(request, response){
    
    const { dev_id } = request.params;

   await connection('devices')
    .where('dev_id',dev_id)
    .delete();

    return response.status(204).send();
  },

  async update (request, response){
    const  dev_name = request.body.dev_name;
    const dev_ip = request.body.dev_ip;
    const dev_port = request.body.dev_port;
    const dev_status = request.body.dev_status;
    const dev_url = request.body.dev_url;
    const dev_part =request.body.dev_part;
    const dev_id = request.body.dev_id;
        
    console.log(dev_name, dev_ip, dev_port, dev_status, dev_url, dev_part, dev_id);
    
    const device = await connection('devices')
    .where('dev_id', dev_id)
    .update({
        dev_name, 
        dev_ip, 
        dev_port,
        dev_status, 
        dev_url, 
        dev_part       
    })
    
    return response.json("Alterado com sucesso!");
  },

}