<script lang="ts">
    import '../app.css';
    import Header from '$lib/components/layout/header.svelte';
    import Sidebar from '$lib/components/layout/sidebar.svelte';
    import Panel from '$lib/components/layout/panel.svelte';
    import Footer from '$lib/components/layout/footer.svelte';
    import LeftBanner from '$lib/components/layout/left-banner.svelte';
    import RightBanner from '$lib/components/layout/right-banner.svelte';

    const { children } = $props(); // Svelte 5
    let snbPosition: 'left' | 'right' = 'left'; // 기본값

    // 컨테이너 밖 배경
    const bg = () =>
        `linear-gradient(to right, ${
            snbPosition === 'left'
                ? 'hsl(var(--background)) 50%, hsl(var(--canvas)) 50%'
                : 'hsl(var(--canvas)) 50%, hsl(var(--background)) 50%'
        })`;
</script>

<svelte:head>
    <title>Quilt UI Kit</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="relative flex min-h-screen flex-col items-center">
    <!-- 확장된 main 박스 (border 포함) -->
    {#if snbPosition === 'left'}
        <div class="snb-backdrop-left"></div>
    {:else if snbPosition === 'right'}
        <div class="snb-backdrop-right"></div>
    {/if}

    <div class="container relative z-10 flex w-full flex-1 flex-col">
        <Header />

        <div class="mx-auto flex w-full flex-1">
            <aside class="hidden w-[14.5rem] bg-background 2xl:block">
                <Sidebar />
            </aside>

            <main
                class="flex-1 overflow-y-auto rounded-t-xl pt-1 md:py-5 lg:pe-6 xl:min-w-[824px] 2xl:px-6"
            >
                {@render children()}
            </main>

            {#if snbPosition === 'left'}
                <aside class="my-5 hidden min-w-[320px] rounded-md bg-subtle lg:block">
                    <!-- 여기에 오른쪽 사이드바 내용 추가 -->
                    <Panel />
                </aside>
            {/if}
        </div>
    </div>
    <!-- 왼쪽 배너 - 절대 위치, 1200px 밖에 배치 -->
    <aside class="fixed left-4 top-1/2 z-30 hidden w-[160px] -translate-y-1/2 xl:block">
        <LeftBanner />
    </aside>
    <!-- 오른쪽 배너 - 절대 위치, 1200px 밖에 배치 -->
    <aside class="fixed right-4 top-1/2 z-30 hidden w-[160px] -translate-y-1/2 xl:block">
        <RightBanner />
    </aside>

    <!-- 푸터 -->
    <Footer />
</div>
