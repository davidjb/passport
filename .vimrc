augroup LOCAL_SETUP
au!
    autocmd BufNewFile,BufRead *.js setlocal filetype=javascript.jsx
    autocmd Filetype javascript.jsx let g:syntastic_javascript_checkers = ['eslint']
augroup END
