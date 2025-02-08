import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc,onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

class TaskService {
    async createTask(task: TTasks) {
        try {
            const docRef = await addDoc(collection(db, "tasks"), task);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async getTasks() {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasks: TTasks[] = [];
        querySnapshot.forEach((doc) => {
            return tasks.push({...doc.data() as TTasks, id: doc.id });
        });
        return tasks;
    }

    async updateTask(task: TTasks) {
        try {
            await updateDoc(doc(db, "tasks", task.id), task as Partial<TTasks>);
            console.log("Document updated with ID: ", task.id);
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    }

    async deleteTask(taskId: string) {
        try {
            await deleteDoc(doc(db, "tasks", taskId));
            console.log("Document deleted with ID: ", taskId);
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    }
    
    async onTaskUpdate(callback: (tasks: TTasks[]) => void) {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasks: TTasks[] = [];
        querySnapshot.forEach((doc) => {
            return tasks.push({...doc.data() as TTasks, id: doc.id });
        });
        callback(tasks);
        onSnapshot(collection(db, "tasks"), (snapshot) => {
            const tasks: TTasks[] = [];
            snapshot.forEach((doc) => {
                return tasks.push({...doc.data() as TTasks, id: doc.id });
            });
            callback(tasks);
        });
    }
}

export default new TaskService();