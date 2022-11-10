import { Component, OnInit } from '@angular/core';


import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  public editForm: FormGroup;
  postRef:any;
  constructor(
    public postService: PostService,
    public formsBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.editForm = this.formsBuilder.group({
      marca :[''],
      categoria :[''],
      almacen: [''],
      precio : [''],
    });
  }

  ngOnInit() {

    const id =this.activatedRoute.snapshot.paramMap.get('id')
    this.postService.getPostsById(id).subscribe( res => {
      this.postRef = res
      this.editForm = this.formsBuilder.group({
        marca:[this.postRef.marca],
        categoria:[this.postRef.categoria],
        almacen:[this.postRef.almacen],
        precio:[this.postRef.precio] ,      
    })

  })
  
}

onSubmit(){
  const id = this.activatedRoute.snapshot.paramMap.get('id')
  this.postService.updatePost(this.editForm.value, id)
  this.router.navigate([''])

}
}
