<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/layout/header.svelte';
  import Sidebar from '$lib/components/layout/sidebar.svelte';
  // 필요 없으면 아래 세 개는 잠시 주석 처리
  // import Footer from '$lib/components/layout/footer.svelte';
  // import LeftBanner from '$lib/components/layout/left-banner.svelte';
  // import RightBanner from '$lib/components/layout/right-banner.svelte';

  const { children } = $props();               // Svelte 5
  let snbPosition: 'left' | 'right' = 'left';  // 기본값

  // style은 문자열 하나로 계산해 넣기
  const bg = () =>
    `linear-gradient(to right, ${
      snbPosition === 'left'
        ? 'white 50%, var(--dusty-100) 50%'
        : 'var(--dusty-100) 50%, white 50%'
    })`;
</script>

<svelte:head>
  <title>Quilt UI Kit</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center" style={`background: ${bg()};`}>
  <div class="flex w-full max-w-[1440px] flex-1 flex-col bg-white">
    <header class="sticky top-0 flex h-14 w-full items-center bg-white">
      <div class="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Header />
      </div>
    </header>

    <div class="container mx-auto flex flex-1 bg-transparent">
      <aside class="hidden w-64 border-r bg-white md:block">
        <Sidebar />
      </aside>

      <main class="flex-1 overflow-y-auto bg-dusty-100 p-4 md:p-6">
        {@render children()}   <!-- ❗ 옵셔널 체이닝 제거 -->
      </main>
    </div>
  </div>
</div>
