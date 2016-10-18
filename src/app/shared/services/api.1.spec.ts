import { ApiService } from './api';
import { inject, async, addProviders } from '@angular/core/testing'
import { MockBackend } from '@angular/http/testing'
import { BaseRequestOptions, Http, ResponseOptions, Response } from '@angular/http'


describe("ApiSevive", ()=>{
  let mockbackend, api;

  beforeEach(()=>addProviders([
    MockBackend,
    BaseRequestOptions,
    ApiService,
    {
      provide: Http,
      useFactory: (backend, options) => new Http(backend, options),
      deps: [MockBackend, BaseRequestOptions]
    }
  ]))

  beforeEach(inject([ApiService, MockBackend], (apiService, mock)=>{
    api = apiService;
    mockbackend = mock;
  }))

  it('should make get request', async(() => {
     let response = {notes: [1, 2, 3]};

     mockbackend.connections.subscribe(connection => {
       connection.mockRespond(new Response(
         new ResponseOptions({body: JSON.stringify(response), status: 200})
       ));
     });

     api.get('/notes')
     .subscribe(notes => {
       expect(notes).toEqual(response);
     });
  }));
})