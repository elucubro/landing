<script>
    import IndividualProject from "./IndividualProject.svelte";

    import DiRust from 'svelte-icons/di/DiRust.svelte'
    import DiPython from 'svelte-icons/di/DiPython.svelte'
    import DiAngularSimple from 'svelte-icons/di/DiAngularSimple.svelte'
    import DiReact from 'svelte-icons/di/DiReact.svelte'
    import DiScriptcs from 'svelte-icons/di/DiScriptcs.svelte'
    import DiLinux from 'svelte-icons/di/DiLinux.svelte'
    import DiGit from 'svelte-icons/di/DiGit.svelte'
    import DiBootstrap from 'svelte-icons/di/DiBootstrap.svelte'

    const tinoSMTP=[DiRust, DiPython, DiAngularSimple]
    const infinityCall=[DiReact, DiPython, DiScriptcs]
    const tinoCI=[DiPython, DiLinux, DiGit, DiReact]
    const tinoSens=[DiScriptcs, DiLinux, DiBootstrap, DiPython]
    const SimFinMan=[DiPython, DiScriptcs, DiReact]
</script>

<div class="max-w-full flex flex-col lg:grid p-10 w-full h-full mt-5 lg:grid-cols-3 lg:grid-rows-2 gap-5">
<IndividualProject desc="An SMTP/IMAP email client with a built in SMTP server implementation" title="TinotendaSMTP" link_href="https://github.com/elucubro" logo_array={tinoSMTP}/>
<IndividualProject desc="A low latency audio transmission system for my band's remote practices" title="InfinityCall" link_href="https://github.com/elucubro" logo_array={infinityCall}/>
<IndividualProject desc="A web utility that manages bash scripts to control basic local CI/CD" title="Tiny-CI/CD" link_href="https://github.com/elucubro" logo_array={tinoCI}/>
<IndividualProject desc="A program that finds a user's perfect sensitivity in valorant by analyzing game data as opposed to a conventional Aim Trainer" title="Tino's Sensitivity Finder" link_href="https://github.com/elucubro" logo_array={tinoSens}/>
<IndividualProject desc="This links in with Australia's Open Banking API, to manage household expenses" title="Simple Financial Manager" link_href="https://github.com/elucubro" logo_array={tinoSens}/>
<a href="projects" class="border-primary h-full border-solid border-2 bg-transparent hover grid justify-center hover:bg-primary content-center text-3xl font-poppins w-full rounded-3xl"><div class=" bg-transparent hover grid justify-center hover:bg-primary content-center text-3xl font-poppins w-full rounded-3xl">
    <div class=" border-bottom-3 grid justify-center content-center text-3xl h-10 text-white"><h1>see more projects ---> </h1></div>
</div></a>
</div>