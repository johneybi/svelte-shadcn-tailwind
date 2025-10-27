<script lang="ts">
    // 스크롤 테스트용 아이템 배열 생성
    let items = $state(Array.from({ length: 50 }, (_, i) => i + 1));
</script>

<div class="flex-col items-center justify-center">
    <h1 class="mb-4 text-2xl font-bold">스크롤 테스트</h1>
    {#each items as item}
        <p class="py-2">스크롤 테스트 중입니다. #{item}</p>
    {/each}
</div>
