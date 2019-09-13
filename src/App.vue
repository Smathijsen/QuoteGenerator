<template>
    <div class ="container" >
        <div id="fb-root"></div>
        <div class ="row">
            <div class="col-xs-12">
                <app-quote>
                    <p slot="quote">{{results.data.quote}}</p>
                    <p slot="author"> - {{results.data.author}}</p>
                    <!-- <div slot="content">
                        {{results.data.quote}}
                        <br>
                        - {{results.data.author}} -->
                        <!-- Loop through all the quote objects retrieved from the API -->
                        <!-- <ul v-for="objects in results.data" :key="objects.id">
    
                            <li v-for="item in objects" :key="item.id">
                                {{item}}
                                {{item.author}}
                            </li>
                        </ul> -->
                    <!-- </div> -->
                </app-quote>
                    <!-- <h1 slot="title">{{quoteTitle}}</h1> -->
                    <!-- <p slot="content">{{info.data}}</p>
                    <p slot="content">- {{info.author}}</p> -->
                <social-media></social-media>
            </div>
        </div>
    </div>

</template>


<script>
import Quote from './components/Quote'
import SocialMedia from './components/SocialMedia'
    export default{
        data: function(){
            return {
                // quoteTitle: '',
                
                info: null,
                results: null
            }
        },
        mounted () {
            axios
                .get('http://quotes.stormconsultancy.co.uk/quotes/random.json')
                .then(response => (this.results = response))
        },

        components: {
            'app-quote': Quote,
            'social-media':SocialMedia, 
        }
    }

</script>

<style>
    body {
        background-image: url('./assets/background.jpg');
    }

</style>
