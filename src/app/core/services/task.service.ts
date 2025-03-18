import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/interface/task'
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc, docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private firestore =  inject(Firestore);
  private tasksCollection = collection (this.firestore, 'tasks');

  constructor() { }

  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  //AGREGAR TAREAS
  addTask(task: Omit<Task, 'id'>) {
    const tasksCollection = collection(this.firestore, 'tasks');
    return addDoc(tasksCollection, task);
  }

  //ACTUALIZAR TAREAS
  updateTask(task: Task): Promise<void> {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskDocRef, { 
      title: task.title,
      description: task.description,
      date: task.date,
      done: task.done
    });
  }

  //ELIMINAR TAREAS
  async deleteTask(taskId: string): Promise<void> {
    const taskDocRef = doc(this.firestore, `tasks/${taskId}`);
    return deleteDoc(taskDocRef);
  }

}
