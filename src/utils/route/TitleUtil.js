import { nextTick } from 'vue'
var TitleUtil = {
    handle(router){
        const baseTitle = 'Json to Dart'
        router.beforeEach((to) => {
            nextTick(() => {
                let title = baseTitle + ' | ' + to.meta.title
                document.title = title
            });
        });   
    },
}

export default TitleUtil