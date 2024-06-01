// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { AdminComponent } from './admin.component';
// import { loadInCustomPosts } from 'src/app/redux/actions/core.action';

// describe('AdminComponent', () => {
//   let component: AdminComponent;
//   let fixture: ComponentFixture<AdminComponent>;
//   let store: MockStore;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [AdminComponent],
//       providers: [provideMockStore({})]
//     }).compileComponents();

//     fixture = TestBed.createComponent(AdminComponent);
//     component = fixture.componentInstance;
//     store = TestBed.inject(MockStore);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should dispatch loadInCustomPosts action on form submission', () => {
//     const spy = spyOn(store, 'dispatch');
//     const formData = { /* Mock form data */ };
//     component.onSubmit();
//     expect(spy).toHaveBeenCalledWith(loadInCustomPosts({ data: formData }));
//   });
// });
