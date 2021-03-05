/*store中getters模块
类似计算属性模块*/

export default {  //需要对外暴露数据，要不然报错
    //根据购物车里面食品，计算总价格
    carFoodPrices(state){
        let price = 0; //初始为0
        //遍历购物车里面食物，计算count总和
        price = state.shoppingCar.reduce((acc, cur,index, shoppingCar)=>{
            return acc += cur.price * cur.count;  //累计每一个食品中的count
        }, 0)
        return price;
    },
    //根据购物车里面食品，计算总数量
    carFoodNums(state){
        let foodNum = 0; //初始为0
        //遍历购物车里面食物，计算count总和
        foodNum = state.shoppingCar.reduce((acc, cur,index, shoppingCar)=>{
            return acc += cur.count;  //累计每一个食品中的count
        }, 0)
        return foodNum;
    },
    //根据foods变化，计算每一类食物的购买总数
    carFoodEveryNum(state){
        let classTotal = [];
        state.foods.forEach((foodObj, index)=>{
            classTotal.push(foodObj.foods.reduce((acc, food, indexIn)=>{
                if(food.count > 0){
                    acc += food.count;
                }
                return acc;
            }, 0));
        });
        return classTotal
    }
}