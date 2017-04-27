import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const list = [
            {
                id: 1,
                title:'task 1',
                completed: true
            },
            {
                id: 2,
                title:'task 2',
                completed: true
            },
            {
                id: 3,
                title:'task 3',
                completed: false
            },
            {
                id: 4,
                title:'task 4',
                completed: false
            }

        ];
        
        return { list: list };
    }
}