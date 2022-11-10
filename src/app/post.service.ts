import { Injectable } from '@angular/core';

import { AngularFirestore} from '@angular/fire/compat/firestore';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor( private angularFirestore: AngularFirestore) { }

    // metodos del crud

    getPosts() {
      return this.angularFirestore
        .collection("posts")
        .snapshotChanges() 
}

getPostsById(id) {
    return this.angularFirestore
      .collection("posts")
      .doc(id)
      .valueChanges() 
}

createPost(post: Post) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection("posts")
        .add(post)
      .then((response) => {
  console.log(response)

      },
          (error) => {
        reject(error)
          })
    }) 
}

updatePost(post: Post, id) {
    return this.angularFirestore
      .collection("posts")
      .doc(id)
      .update({
        marca: post.marca,
        categoria: post.categoria,
        almacen : post.almacen,
        precio : post.precio,
      }); 

}

deletePost(post: Post) {
    return this.angularFirestore
        .collection("posts")
        .doc(post.id)
        .delete()
    } 
}

