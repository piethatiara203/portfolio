import { TestBed } from '@angular/core/testing';
import { HttpInterceptorCore } from './http.interceptor';

describe('InterceptorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpInterceptorCore],
    })
  );

  it('should be created', () => {
    const interceptor: HttpInterceptorCore =
      TestBed.inject(HttpInterceptorCore);
    expect(interceptor).toBeTruthy();
  });
});
