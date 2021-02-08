import {Entity, model, property} from '@loopback/repository';

/* eslint-disable @typescript-eslint/no-empty-interface */

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'domain_event'}},
})
export class DomainEvent extends Entity {
  @property({
    type: String,
    required: true,
    postgresql: {
      columnName: 'id',
      dataType: 'uuid',
      nullable: 'NO',
    },
  })
  id: Number;

  @property({
      type: String,
      required: true,
      postgresql: {
          columnName: 'payload',
          dataType: 'jsonb',
          nullable: 'NO',
      },
  })
  payload: String;

  @property({
    type: String,
    required: true,
    postgresql: {
        columnName: 'status',
        dataType: 'varchar',
        nullable: 'NO',
    },
   })
   status: String;

   @property({
     type: String,
     required: true,
     postgresql: {
        columnName: 'created_at',
        dataType: 'timestampz',
        nullable: 'NO',
     },
    })
    createdAt: String;

    @property({
        type: String,
        required: true,
        postgresql: {
           columnName: 'updated_at',
           dataType: 'timestamptz',
           nullable: 'NO',
        },
    })
    updated_at: String;
    
}

