<script>
import { page } from '$app/stores'
</script>

<div class="prose">
  <h1>ERR {$page.status}</h1>
  <p>Whoops! Server says: "{$page.error?.message}"</p>
</div>
