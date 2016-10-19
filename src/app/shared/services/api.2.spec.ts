import { Observable } from 'rxjs/Observable';
import { ApiService } from './api';
import { inject, async, TestBed } from '@angular/core/testing'
import { MockBackend } from '@angular/http/testing'
import { BaseRequestOptions, Http, ResponseOptions, Response } from '@angular/http'


describe("ApiSevive", ()=>{
  let http, api;

  // beforeEach(()=>addProviders([
  //   ApiService,
  //   {
  //     provide: Http,
  //     useFactory: () => jasmine.createSpyObj("Http", ["get"])
  //   }
  // ]))

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [ MockBackend, BaseRequestOptions, ApiService, 
      {
        provide: Http,
        useFactory: () => jasmine.createSpyObj("Http", ["get"])
      }]
    })
  })

  beforeEach(inject([ApiService, Http], (apiService, httpService)=>{
    api = apiService;
    http = httpService;
  }))

  it('should make get request', async(() => {
     let response = {notes: [1, 2, 3]};

    //  mockbackend.connections.subscribe(connection => {
    //    connection.mockRespond(new Response(
    //      new ResponseOptions({body: JSON.stringify(response), status: 200})
    //    ));
    //  });

    http.get.and.returnValue(Observable.from([new Response(
      new ResponseOptions({body: JSON.stringify(response), status: 200})
    )]))

     api.get('/notes')
     .subscribe(notes => {
       expect(notes).toEqual(response);
     });
  }));
})