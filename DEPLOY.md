# Deploying to OCF

`pasae.studentorg.berkeley.edu` is already set up as a virtual host pointing
at a group account's `public_html` — that setup happened when the old site
went live, so **no new OCF hosting request is needed**. Deploying this site
is just a matter of connecting to that same account and replacing what's in
`public_html`.

## One-time: archive the old site

Before the first deploy, move the current (old) site into a subfolder so it
stays reachable at `pasae.studentorg.berkeley.edu/old` (the footer's "View
our previous site" link points here):

```sh
ssh <group-account>@ssh.ocf.berkeley.edu
cd public_html
mkdir old
# move everything except the folder you just made into it
find . -maxdepth 1 ! -name . ! -name old -exec mv {} old/ \;
```

Do this once. After it, `public_html` should contain only the `old/` folder
until the first deploy below fills it back in.

## Every deploy

1. Build the site locally:

   ```sh
   npm run build
   ```

   This produces `dist/`, containing `index.html`, `.htaccess`, `favicon.png`,
   and an `assets/` folder — everything `public_html` needs at its root.

2. Copy `dist/`'s contents into `public_html` on the OCF account, without
   touching `public_html/old/`:

   ```sh
   rsync -avz --delete --exclude 'old' dist/ <group-account>@ssh.ocf.berkeley.edu:public_html/
   ```

   (`--delete` removes files from a previous deploy that no longer exist in
   the new build — e.g. old hashed asset filenames — but `--exclude 'old'`
   keeps it from touching the archived site.)

3. Visit `https://pasae.studentorg.berkeley.edu` to confirm, and
   `https://pasae.studentorg.berkeley.edu/old` to confirm the archived site
   still loads.

## Why the `.htaccess` matters

This is a client-side-routed React app — Apache doesn't know routes like
`/about` or `/join` exist as anything but `index.html` plus JS that reads
the URL. `.htaccess` (included in the build) rewrites any request that
isn't a real file or directory back to `index.html`, so direct links and
page refreshes on any route work instead of 404ing. It only rewrites
requests that don't already match a real file/directory, so it won't
interfere with `public_html/old/`.
