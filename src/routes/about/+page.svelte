<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    let time = (Date.now() - 1577836800000);
    let time_obj = {"years": Math.floor(time / 31556952000), "days": Math.floor((time % 31556952000)/86400000), "hours": Math.floor((time % 86400000)/3600000), "minutes": Math.floor((time % 3600000)/60000), "seconds": Math.floor((time % 60000)/1000)};
    // time since 1st of jan 2020
    let startTime;
    let interval: any;
    
    console.log(time);
    // put in years rounded, remainder in days
    function updateTime(){
        time = (Date.now() - 1577836800000);
        time_obj = {"years": Math.floor(time / 31556952000), "days": Math.floor((time % 31556952000)/86400000), "hours": Math.floor((time % 86400000)/3600000), "minutes": Math.floor((time % 3600000)/60000), "seconds": Math.floor((time % 60000)/1000)};
    }
    onMount(()=>{
        updateTime();
        const interval = setInterval(()=>{
            updateTime();
        }, 1000);

    });
    onDestroy(()=>{
        clearInterval(interval);
    });
</script>

<div class="flex flex-col justify-between h-screen">
    <div class="flex justify-center ">
        <a href="/" class="self-center text-xl text-white text-center p-6">back</a>
    </div>
<div class="w-screen grid h-screen grid-cols-2 grid-rows-[auto,1fr] justify-center items-start content-center">
    <div class="flex col-span-2 row-span-1 max-h-min flex-col justify-center my-10 gap-5">
        <h1 class="text-4xl font-poppins text-white text-center">I've been programming for <span class="text-xs">(around)</span>  <br></h1>
    <h1 class="text-4xl text-center font-poppins text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">{time_obj["years"]} years, {time_obj["days"]} days, {time_obj["hours"]}, hours, {time_obj["minutes"]} minutes, and {time_obj["seconds"]} seconds.</h1>
    </div>
    <div class="p-10 gap-10 flex flex-col justify-start w-full h-full">
    
    <p class="text-2xl font-sans text-white">Truth be told, it's probably quite a bit longer than that. My programming experience started with a <a class="text-primary" href="https://scratch.mit.edu/projects/393993023/">scratch game</a> I made for fun in 2020, attempting to make a platformer (and failing miserably).</p>
    <p class="text-2xl font-sans text-white">From there, I started learning the Java programming language because I wanted to make mods for a game called Minecraft, and then I was asked by one of my teachers to automate the timetabling system <a class="text-primary" href="https://github.com/elucubro/dynamicTimeTable">which I decided to do in Java.</a> I ended up just using shridattz's dynamic timetable, but I learnt a lot about Genetic Algorithms and Object Oriented Programming in the process</p>
    <p class="text-2xl font-sans text-white">After that, I really wanted to learn how to make websites, because I thought it would be cool to have my own personal website (here we are)! This is when I stumbled upon <a class="text-primary" href="https://theodinproject.com">The Odin Project.</a> This really made me understand how to become a front-end developer, and made me understand lots of key javascript concepts.</p>
    </div>
    <div class="p-10 gap-10 flex flex-col justify-start w-full h-full">
        <p class="text-2xl font-sans text-white">I've always liked programming, sort of treating it like a ridiculous sandbox game. It's really fun and I always feel really accomplished whenever the empty neovim window turns into a full featured project.</p>
        <p class="text-2xl font-sans text-white">So, I guess that you could say even beyond just a position, I enjoy programming as a hobby. It's kind of like how some people enjoy building physical structure and the accomplishment that comes with that. Even though programming is relatively new, considering it only really became prominent in the 20th century, I think it taps into an intrinsic value that comes with being human, just that desire to create.</p>
        <p class="text-2xl font-sans text-white">After that, I really wanted to learn how to make websites, because I thought it would be cool to have my own personal website (here we are)! This is when I stumbled upon <a class="text-primary" href="https://theodinproject.com">The Odin Project.</a> This really made me understand how to become a front-end developer, and made me understand lots of key javascript concepts.</p>
        </div>
</div>
</div>