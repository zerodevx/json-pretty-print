<script>
import { page } from '$app/stores'
</script>

<div class="prose mx-auto mt-8 text-center">
  <h1>ERR {$page.status}</h1>
  <p>Whoops! Server says: "{$page.error?.message}"</p>
</div>
