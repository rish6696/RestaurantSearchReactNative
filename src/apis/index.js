import axios from 'axios'


    export default axios.create({
        baseURL:'https://api.yelp.com/v3/businesses',
        headers:{
            Authorization:'Bearer uvxJ7J1cYnhXZ9omzPXEjcr_2dCbM3HmwOeB6HdhfRtidNXzifd9e2wENv_2YGtLY9Ode-20AGez5zZS-aiUA95FpvSGQAeVFa2M6ye9ynJnr99KErt_5bMwi6lSXXYx'
        }
    })