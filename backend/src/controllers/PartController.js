const connection = require('../database/connection');

module.exports =  {
async index (request, response){
       const{part_id}  = request.params;

        const part = await connection('parts')
        .where('part_id', part_id)
        .select('*');
        
        return response.json(part);
    },

    async list (request,response){
        const parts = await connection('parts').select('*');
      
        return response.json(parts);
    },

    async listActive (request,response){
      const parts = await connection('parts')
      .where('part_status','A')
      .select('*');
    
      return response.json(parts);
  },

    async create(request, response){
        const {part_name, part_url, part_status} = request.body;
      
        await connection('parts').insert({
          part_name,
          part_url,
          part_status
        })

        return response.json('Cadastrado com sucesso!');
    },

    async update(request, response){
        const {part_id, part_name, part_url, part_status} = request.body;
              
        await connection('parts')
        .where('part_id', part_id)
        .update({
          part_name,
          part_url,
          part_status
        })

        return response.json('Alterado com sucesso!');
    }

}