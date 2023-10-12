new Vue({
    el: '#usuarios',
    data: function () {
        return {
            users: {data: []},
        };
    },
    methods: {
        loadUsers: function () {
            let self = this;

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://reqres.in/api/users?per_page=10', true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);
                    console.log(data);

                    self.users = data;
                } else if (xhr.readyState === 4) {
                    console.error('erro ao buscar dados');
                }
            };

            xhr.send()
        },
    },
    mounted: function () {
        this.loadUsers();
    },
});