<script>
  import { mdiHome, mdiMagnify, mdiTrashCan } from '@mdi/js';

  import { Button, Shine, Tilt } from 'svelte-ux';

  const cards = [
    'https://nelsoncodepen.s3.eu-west-2.amazonaws.com/thb-250-plains.png',
    'https://nelsoncodepen.s3.eu-west-2.amazonaws.com/thb-251-island.png',
    'https://nelsoncodepen.s3.eu-west-2.amazonaws.com/thb-252-swamp.png',
    'https://nelsoncodepen.s3.eu-west-2.amazonaws.com/thb-253-mountain.png',
    'https://nelsoncodepen.s3.eu-west-2.amazonaws.com/thb-254-forest.png',
    'cards/alfa.jpg',
    'cards/art.jpg', 
    'cards/filo.jpg',
    'cards/robo.jpg',
    'cards/sigma.jpg'
  ];
</script>

<svelte:head>
	<title></title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<!-- <h1>Escolha suas cartas</h1> -->
	<h1>Escolha o seu avatar</h1>


	<Shine depth={3} lightColor="#FF0000">
  <div class="text-[9rem] leading-[9rem] grayscale-[100] brightness-50">
    👻 💀 🦹‍♀️
  </div>
</Shine>

<div class="h-12"></div>

<Shine>
  <div class="flex flex-wrap items-center justify-center content-center gap-6">
    {#each cards as card, i}
      <Tilt class="hover:scale-110 transition duration-500">
        <img
          src={card}
          width="180px"
          class="transition ease-out"
          alt="example {i}"
        />
      </Tilt>
    {/each}
  </div>
</Shine>

</div>
