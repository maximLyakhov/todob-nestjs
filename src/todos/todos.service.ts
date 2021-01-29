import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    private todos = [
        {"title":"fasdfadsfasdf","description":"","date":1611571422998,"done":true},
        {"title":"fasdfasdfas","description":"dfasd","date":1611571425125,"done":true},
        {"title":"asdfasdfasdf","description":"d","date":1611571428061,"done":false},
        {"title":"fasdfasdfads","description":"fd","date":1611571431878,"done":false},
        {"title":"fasdfasdf","description":"d","date":1611571434006,"done":false},
        {"title":"gadfgsdfgasdfgsdfg","description":"sdf","date":1611571436669,"done":true},
        {"title":"gsdfgsdfgsdf","description":"gsd","date":1611571438726,"done":true},
        {"title":"fgsdfgsdfgsdfg","description":"sd","date":1611571440901,"done":false},
        {"title":"gsdfgsdfgsdfAG34G","description":"A","date":1611571444622,"done":false},
        {"title":"4534G\\4GAS4","description":null,"date":1611571447365,"done":true},
        {"title":"ADSFZV34","description":"","date":1611571451974,"done":true},
        {"title":"85685GXGBN","description":"222","date":1611571455869,"done":true},
        {"title":"ASDFASDFAfasd","description":"dfasdfasdf","date":1611571549702,"done":true},
        {"title":"sdgfhdfghdfgh","description":"dfghdfghdgfh","date":1611571956236,"done":true},
        {"title":"ghdfghdfgh","description":"dfgh","date":1611571958564,"done":true},
        {"title":"fasdfadsfadsfasdf","description":"d","date":1611572083396,"done":false},
        {"title":"fasdfasdfadsf","description":"fd","date":1611572086732,"done":true},
        {"title":"asdfasdfasdf","description":"","date":1611572300203,"done":true},
        {"title":"pivo","description":"","date":1611581256432,"done":true}
        ]
    
    findTodos(){
        return this.todos
    }

    postTodo(data){
        this.todos.push(data)
    }
    
    deleteTodo(date){
        let firingTodoIndex = this.todos.findIndex(e => e.date = date)
        this.todos.splice(firingTodoIndex, 1)
    }
    
}
