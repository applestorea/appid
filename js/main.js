$(function (w) {
    w.clientWidth = document.body.clientWidth;
    w.clientHeight = document.body.clientHeight;
    let tipsSvg = '<svg style="vertical-align: middle;margin-right: 5px" t="1602926160057" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2429" data-spm-anchor-id="a313x.7781069.0.i27" width="40" height="40"><path d="M320.512 850.944l-71.68-40.96 60.416-104.448 34.816-21.504h478.208V254.976H201.728v347.136h-81.92V214.016l40.96-40.96h702.464l40.96 40.96v510.976l-40.96 40.96H368.64z" fill="#ffffff" p-id="2430" data-spm-anchor-id="a313x.7781069.0.i25" class="selected"></path><path d="M481.28 431.104h61.44v61.44h-61.44zM284.672 431.104h61.44v61.44h-61.44zM677.888 431.104h61.44v61.44h-61.44z" fill="#ffffff" p-id="2431" data-spm-anchor-id="a313x.7781069.0.i23" class="selected"></path></svg>';
    let qrSvg = '<svg style="vertical-align: middle;margin-right: 5px" t="1602927606509" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4167" width="40" height="40"><path d="M146.432 336.896h-81.92V106.496l40.96-40.96h231.424v81.92H146.432zM336.896 958.464H105.472l-40.96-40.96V687.104h81.92v189.44h190.464zM956.416 336.896h-81.92V147.456H684.032v-81.92h231.424l40.96 40.96zM915.456 958.464H613.376v-81.92h261.12V659.456h81.92v258.048z" fill="#ffffff" p-id="4168" data-spm-anchor-id="a313x.7781069.0.i59" class="selected"></path><path d="M326.656 334.848h61.44v98.304h-61.44zM415.744 575.488h61.44v133.12h-61.44zM265.216 575.488h61.44v114.688h-61.44zM566.272 575.488h61.44v98.304h-61.44zM706.56 575.488h61.44v154.624h-61.44zM477.184 297.984h61.44v135.168h-61.44zM627.712 329.728h61.44v103.424h-61.44z" fill="#ffffff" p-id="4169" data-spm-anchor-id="a313x.7781069.0.i58" class="selected"></path><path d="M10.24 473.088h1003.52v61.44H10.24z" fill="#ffffff" p-id="4170" data-spm-anchor-id="a313x.7781069.0.i57" class="selected"></path></svg>';
    let alipaySvg = '<svg t="1602939269695" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1127" width="28" height="28"><path d="M902.095 652.871l-250.96-84.392s19.287-28.87 39.874-85.472c20.59-56.606 23.539-87.689 23.539-87.689l-162.454-1.339v-55.487l196.739-1.387v-39.227H552.055v-89.29h-96.358v89.294H272.133v39.227l183.564-1.304v59.513h-147.24v31.079h303.064s-3.337 25.223-14.955 56.606c-11.615 31.38-23.58 58.862-23.58 58.862s-142.3-49.804-217.285-49.804c-74.985 0-166.182 30.123-175.024 117.55-8.8 87.383 42.481 134.716 114.728 152.139 72.256 17.513 138.962-0.173 197.04-28.607 58.087-28.391 115.081-92.933 115.081-92.933l292.486 142.041c-11.932 69.3-72.067 119.914-142.387 119.844H266.37c-79.714 0.078-144.392-64.483-144.466-144.194V266.374c-0.074-79.72 64.493-144.399 144.205-144.47h491.519c79.714-0.073 144.396 64.49 144.466 144.203v386.764z m-365.76-48.895s-91.302 115.262-198.879 115.262c-107.623 0-130.218-54.767-130.218-94.155 0-39.34 22.373-82.144 113.943-88.333 91.519-6.18 215.2 67.226 215.2 67.226h-0.047z" fill="#02A9F1" p-id="1128" data-spm-anchor-id="a313x.7781069.0.i1" class="selected"></path></svg>';
    let weChatSvg = '<svg t="1602939526328" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1368" width="28" height="28"><path d="M395.846 603.585c-3.921 1.98-7.936 2.925-12.81 2.925-10.9 0-19.791-5.85-24.764-14.625l-2.006-3.864-78.106-167.913c-0.956-1.98-0.956-3.865-0.956-5.845 0-7.83 5.928-13.68 13.863-13.68 2.965 0 5.928 0.944 8.893 2.924l91.965 64.43c6.884 3.864 14.82 6.79 23.708 6.79 4.972 0 9.85-0.945 14.822-2.926L861.71 282.479c-77.149-89.804-204.684-148.384-349.135-148.384-235.371 0-427.242 157.158-427.242 351.294 0 105.368 57.361 201.017 147.323 265.447 6.88 4.905 11.852 13.68 11.852 22.45 0 2.925-0.957 5.85-2.006 8.775-6.881 26.318-18.831 69.334-18.831 71.223-0.958 2.92-2.013 6.79-2.013 10.75 0 7.83 5.929 13.68 13.865 13.68 2.963 0 5.928-0.944 7.935-2.925l92.922-53.674c6.885-3.87 14.82-6.794 22.756-6.794 3.916 0 8.889 0.944 12.81 1.98 43.496 12.644 91.012 19.53 139.48 19.53 235.372 0 427.24-157.158 427.24-351.294 0-58.58-17.78-114.143-48.467-163.003l-491.39 280.07-2.963 1.98z" fill="#09BB07" p-id="1369"></path></svg>';
    let qqSvg = '<svg t="1602939546187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1561" width="28" height="28"><path d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z" fill="#FAAD08" p-id="1562"></path><path d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z" fill="#FAAD08" p-id="1563"></path><path d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z" fill="#000000" p-id="1564"></path><path d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698 185.44461 533.595 177.87261 534.063 177.87261 534.063 166.64961 563.276 155.56661 593.696 147.44761 619.782 108.72961 744.168 121.27261 795.644 130.82461 796.798c20.496 2.474 79.78-93.637 79.78-93.637 0 97.66 88.324 247.617 290.576 248.996a718.01 718.01 0 0 1 5.367 0C708.80161 950.778 797.12261 800.822 797.12261 703.162c0 0 59.284 96.111 79.783 93.637 9.55-1.154 22.093-52.63-16.623-177.017" fill="#000000" p-id="1565"></path><path d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.238-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453" fill="#FFFFFF" p-id="1566"></path><path d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498" fill="#FAAD08" p-id="1567"></path><path d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135" fill="#000000" p-id="1568"></path><path d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927" fill="#FFFFFF" p-id="1569"></path><path d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574" fill="#EB1C26" p-id="1570"></path><path d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z" fill="#EB1C26" p-id="1571"></path></svg>';
    let paypal = '<svg t="1603032405616" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="973" width="28" height="28"><path d="M241.534 764.95H188.01c-3.692 0-7.385 1.852-7.385 7.408l-22.149 138.886c0 1.852 1.846 3.704 3.692 3.704h25.842c3.692 0 7.38-1.852 7.38-7.408l7.384-38.888c0-3.705 3.692-7.41 7.384-7.41h18.458c35.066 0 57.216-18.516 62.754-51.848 1.846-14.813 0-25.927-7.384-35.184-9.227-5.556-22.15-9.26-42.452-9.26z m5.538 50c-1.846 20.367-18.456 20.367-33.221 20.367h-9.23l7.383-35.184c0-1.852 1.847-5.552 3.688-5.552h3.692c9.232 0 20.304 0 23.996 7.404 3.692 1.852 5.538 7.409 3.692 12.966z m158.73 0h-25.84c-1.846 0-3.692 1.848-3.692 3.7l-1.846 7.41-1.846-1.853c-7.381-9.256-18.458-11.109-31.376-11.109-29.53 0-53.524 22.219-57.216 53.701-1.846 14.813 0 29.628 9.23 40.74 9.226 9.257 20.303 12.962 33.222 12.962 12.918 0 25.84-3.705 35.067-14.814l-1.846 7.41c0 1.851 1.846 3.7 3.692 3.7h23.995c3.693 0 7.38-1.849 7.38-7.405l12.923-88.89c1.846-3.704 0-5.551-1.846-5.551z m-38.758 51.85c-1.847 14.812-14.765 24.074-29.534 24.074-7.38 0-12.918-1.852-18.457-7.408-3.692-3.706-3.692-11.11-3.692-18.519 1.846-14.813 14.77-24.074 29.533-24.074 7.385 0 12.919 1.853 18.457 7.41 3.693 5.556 7.385 11.108 3.693 18.516z m179.033-51.85h-25.84c-1.847 0-3.693 1.848-7.385 1.848l-35.068 53.706-14.764-51.853c0-1.853-3.692-3.7-7.385-3.7h-25.837c-1.846 0-3.692 1.847-3.692 3.7v1.852l29.529 85.184-25.837 38.889c-1.846 1.852 0 3.704 0 7.408h29.53c1.846 0 3.692-1.852 7.384-1.852l86.746-127.777c-3.692-1.852-5.535-5.557-7.38-7.404z" fill="#253B80" p-id="974"></path><path d="M632.823 764.95h-55.37c-3.692 0-7.38 1.852-7.38 7.408l-22.15 140.738c0 1.852 1.843 3.7 3.692 3.7h29.53c1.846 0 3.692-1.848 3.692-3.7l7.38-40.74c0-3.704 3.692-7.409 7.385-7.409h18.457c35.067 0 57.216-18.517 62.754-51.849 1.846-14.817 0-25.927-7.384-35.188-9.226-9.256-22.149-12.96-40.606-12.96z m7.384 50c-1.846 20.367-18.456 20.367-33.22 20.367h-9.23l7.383-35.184c0-1.852 1.847-3.704 3.693-3.704h3.687c9.23 0 20.303 0 23.995 7.408 3.692 0 3.692 5.557 3.692 11.114z m155.04 0h-25.842c-1.842 0-3.688 1.848-3.688 3.7l-1.846 7.41-1.846-1.853c-7.384-9.256-18.456-11.109-31.38-11.109-29.528 0-53.524 22.219-57.216 53.701-1.846 14.813 0 29.628 9.23 40.74 9.227 9.257 20.304 12.962 33.222 12.962 12.918 0 25.842-3.705 35.068-14.814l-1.846 7.41c0 1.851 1.846 3.7 3.692 3.7h23.994c3.692 0 7.386-1.849 7.386-7.405l12.918-88.89c3.692-3.704 3.692-5.551-1.846-5.551z m-35.068 51.85c-1.846 14.812-14.764 24.074-29.534 24.074-7.38 0-12.918-1.852-18.456-7.408-3.688-3.706-3.688-11.11-3.688-18.519 1.842-14.813 14.764-24.074 29.53-24.074 7.384 0 12.918 1.853 18.456 7.41 3.692 5.556 3.692 11.108 3.692 18.516z m66.443-98.146l-22.145 142.59c0 1.852 1.846 3.704 3.688 3.704h22.15c3.692 0 7.384-1.852 7.384-7.408l22.148-140.738c0-1.853-1.846-3.705-3.692-3.705H832.16c-3.688 1.852-5.538 3.705-5.538 5.557z" fill="#179BD7" p-id="975"></path><path d="M426.106 690.878l11.072-68.519H298.75l77.52-503.69c0-1.852 0-1.852 1.846-5.557 0 0 1.846-1.852 5.538-1.852h191.953c64.6 0 107.052 14.813 131.048 40.74 9.226 11.11 16.61 24.074 22.148 38.888 1.842 18.518 1.842 35.183 0 55.554v16.665l11.073 5.556c7.385 5.557 16.61 9.261 22.149 16.667 9.226 11.113 16.61 24.074 18.456 40.739 1.848 18.518 1.848 38.888-1.846 57.406-5.538 24.074-11.072 44.445-23.994 64.815-9.226 16.665-22.15 31.479-38.76 40.74-14.764 9.26-33.222 18.517-49.832 24.074-22.149 5.553-40.606 7.405-60.909 7.405h-22.15c-22.148 0-40.605 16.67-44.297 38.891v7.406L520.236 685.32v5.557s0 1.852-1.846 1.852h-1.846c0-3.704-90.438-1.852-90.438-1.852z" fill="#253B80" p-id="976"></path><path d="M765.717 248.294c0 5.556-1.846 7.409-1.846 12.96-27.687 138.887-116.279 183.331-230.716 183.331h-59.063c-14.764 0-23.991 9.261-27.683 24.075l-29.533 192.587-7.381 55.558c-1.846 7.404 5.535 14.813 12.92 16.665h107.052c12.918 0 22.148-9.26 23.991-22.222v-5.556l20.303-125.925 1.846-7.405c1.846-12.962 12.922-22.222 23.995-22.222h14.764c101.515 0 177.189-42.593 203.03-161.108 9.226-49.997 5.537-92.59-20.303-120.369-11.072-7.408-18.458-14.813-31.376-20.37z" fill="#179BD7" p-id="977"></path><path d="M738.03 237.185c-5.539 0-7.385-1.853-12.919-1.853-5.538 0-9.23-1.852-12.922-1.852-16.61-1.852-35.068-5.557-51.678-5.557H505.472c-12.923 0-22.15 9.262-23.995 22.223L450.1 463.103v5.557c1.846-14.814 14.765-24.075 27.683-24.075h59.063c114.433 0 204.876-46.292 230.716-183.33 0-5.552 1.842-7.405 1.842-12.961-7.38-1.852-14.764-7.409-22.144-9.257l-9.23-1.852c0 1.852 0 0 0 0z" fill="#222D65" p-id="978"></path><path d="M481.477 251.998c1.846-12.96 12.918-22.223 23.995-22.223h155.039c16.61 0 35.067 0 51.678 5.557 5.538 0 9.23 1.853 12.922 1.853 5.534 0 7.38 1.852 12.92 1.852l5.538 1.848c7.38 1.852 14.764 5.557 22.148 9.261 7.38-49.997 0-85.185-27.687-114.812-29.53-35.183-84.904-50.001-153.193-50.001H385.5c-14.764 0-23.995 9.26-27.687 24.075l-81.211 529.616c-1.843 9.261 5.538 16.671 14.768 20.371h125.506l31.379-196.292c1.846 0 33.222-211.105 33.222-211.105z" fill="#253B80" p-id="979"></path></svg>';
    
    let usdtSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve">  <image id="image0" width="28" height="28" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACT1BMVEUAAAAAqXkArH8Aq38ArIAAo38Ao38Ap3sApnsApnoAp3wArn8AroAApnoArIAAp3wArYEAroEAp3sApnsApHgAoHIAo3YApXgAoXMApXkAp30AoHEXroZgx6yd3cy/6d7K7eS96N2Y28pYxKgQq4IApXoAonQMqX6H1cDt+fb////l9vJ4z7gDpnoAo3UAoXIstI/V8erG6+IdrocqtI/s+fbd9O4aroYLqH7a8+z1+vmt28+r2s6r286r2MvN6eLF6+ICpHgApnqH1sLd8u0An3MAnG4AnnEAlmZbw6hrzLMUrYbz+/kAo3cAqHwAqH0Am2pdxqri9fAHqH1hya71+/q05di25tqV28kAonU8u5u259q15tmy49XR7+dGv6AAoXSg3s7+/PzM6uFSwKT8+vv//f6F1cDC6uDv9/XO6OHJ5d7N5+DV6uSx39JGvJ7Y6+bQ6OLK5d7b7en8/f2o4dPL7eVsxa6Y08T1+fjm+PMQrIIOpnpnyrHZ7ehTup/I6eGz5djA6d7h9fCY1saLzLqQzr2Y0sOX0sN0xrFzxa+DzLmc1MWU0MCNzbuNzry45dn6/v2m4NGb3Mzs+PXb8euo3tAAoHQ/uZnU7ufj9O/2/Pp/071YxqrX8epXw6g9vZwOq4Ls+fXQ7uZUwqbZ8usEpnp30bpbx6sEpXnM7eQAnm4AmGdGvZ8crofk9fBry7FryK2c3MsOqX8ApHcbrobA6d+v49YPqX9ty7Lb8uzS7+dfxqoHqH5Gvp+C076x5Nej39B90rs/vJsCpnssKs3DAAAADnRSTlMAFcb+vw4cyb7Mw/z8s5wgTxoAAAABYktHRCpTvtSeAAAACXBIWXMAABJ0AAASdAHeZh94AAAAB3RJTUUH5gUUEggmHiRlbAAAAb1JREFUKM9jYGBk4uPHBphZWBnY2AX4sQNBDgZOZDkhYSEkHh8DwkwRUVExcTFRCUm4CAOUlpKUlpGVk1dQVFJWkVZFlZRSU9fQ1IIAbR1dPSkkSSl9A0MtBDAyVpOCS0qpmZhqIQMzczG4pKSFpZaVtY0tBNjZa2k5ODrBJKWdtbRcXN3cIcDDE6jXSxoqKeLtA5T01VcT8/N3UlMLCARKBgU7QSRFQ4C80LCw8AinyKjomNg4kLXxCVDJRIgzkpIlRVNS0yCcdGmwpJBYhpZWZlZ2Tm6eiH5+QWFRdnGJllapBFhSWLxMS6u8olJLq6q6phaoqa6+QUurUQ2qs0lLq7mlta29o7Oru6e3r3/CRC2tSRJQOyeDbZkyddp0txkzZ80G8+ZA7OTXnwsNmHmSovNhgbQAYiy/5MJFEIHFkqJLoHJLlznBQmg5huQKUVjwqa5UAIusWr1mLUSuMVIYHmV668xAQus3bNwElivbvAUpPhO2bkOKse079KSQU4KY+M5dUKndeyK3SKGkIX4n6b379k86cPDQ4SOiwrA0hEh9TgnSEmoS0mpOiNTHJciPC/AxMHJw45Dj4QUAqSWMOWNAeRAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDUtMjBUMTg6MDg6MzgrMDg6MDBkdaGLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA1LTIwVDE4OjA4OjM4KzA4OjAwFSgZNwAAAABJRU5ErkJggg==" /></svg>'
    
    let paySvgArr = {
        zfbf2f     : alipaySvg,
        aliweb     : alipaySvg,
        mqq        : qqSvg,
        mzfb       : alipaySvg,
        mwx        : weChatSvg,
        pszfb      : alipaySvg,
        pswx       : weChatSvg,
        wescan     : weChatSvg,
        payjswescan: weChatSvg,
        alipay     : alipaySvg,
        wxpay      : weChatSvg,
        qqpay      : qqSvg,
        paypal     : paypal,
        mgcoin     : alipaySvg,
        vzfb       : alipaySvg,
        vwx        : weChatSvg,
        usdtpay    : usdtSvg,
    };

    let msgArea = w.clientWidth <= 768 ? ['85%'] : ['50%'];
    layui.use(['form','laytpl'], function () {
        let laytpl = layui.laytpl;
        laytpl.config({open: '<<', close: '>>'});

        if (w.clientWidth <= 768 && typeof tipsCon !== 'undefined' && tipsCon !== '') {
            layer.open({
                type    : 1,
                title   : tipsSvg + title,
                closeBtn: 2,
                area    : msgArea,
                skin    : 'home-tips',
                anim    : 5,
                shade   : 0.7,
                content : tipsCon
            });
        }

        //渲染首页商品
        if (typeof goodsMsg !== 'undefined' && goodsMsg !== '') {
            let cateTpl = document.getElementById('cateTpl').innerHTML, cateHtml = '';
            let goodsTpl = document.getElementById('goodsTpl').innerHTML, goodsHtml;
            let changeCate = function (key) {
                goodsHtml = '';
                goodsMsg[key].products.forEach(function (i) {
                    if (i.wholesale_price !== null) {
                        i.wholesale_price_arr = i.wholesale_price.split("\r\n");
                        i.wholesale_price_arr.forEach(function (ii, k) {
                            i.wholesale_price_arr[k] = ii.split("=");
                        })
                    }
                    i.proportion = i.in_stock - i.sales_volume && i.in_stock ? ((i.in_stock - i.sales_volume) / i.in_stock) * 100 : 0;
                    laytpl(goodsTpl).render(i, function (html) {
                        goodsHtml += html;
                    });
                });
                $('.goods-list').empty().append(goodsHtml)
                $('.cate-box').removeClass('cate-box-select').eq(key).addClass('cate-box-select');
            };

            goodsMsg.forEach(function (i, k) {
                i.key = k;
                laytpl(cateTpl).render(i, function (html) {
                    cateHtml += html;
                });
            });
            $('.cate').empty().append(cateHtml).on('click', '.cate-box', function () {
                changeCate($(this).data('key'));
            });
            changeCate(0);
        }


    });

    //页面操作
    $('.pay-type').each(function () {
        let t = $(this), type = t.data('type'), name = t.data('name')
        t.append(paySvgArr[type] + ' ' + name);
    }).click(function () {
        $('.pay-type').removeClass('pay-select')
        $(this).toggleClass("pay-select");
        $('input[name=pay_type]').val($(this).data('id'));
    });
    
    
    $('#buy-btn').click(function(){
        var pay_type = $('input[name=pay_type]').val();
        if(pay_type == ''){
            layer.msg('请选择支付方式');
            return false;
        }
    })

    
    


    //加减商品数量
    let orderNumber = 1;
    let numDoc = $("#orderNumber");
    $('.sub').click(function () {
        orderNumber--;
        if (orderNumber <= 0){
            orderNumber = 1;
            return layer.msg('购买数量不能低于1件');
        }

        numDoc.val(orderNumber);
    })
    $('.add').click(function () {
        orderNumber++;
        if (orderNumber > stock){
            orderNumber = stock;
            return;
        }
        numDoc.val(orderNumber + '');
    })
    numDoc.change(function () {
        let val = parseInt($(this).val());
        if (val <= 0) {
            $(this).val(1);
            orderNumber = 1;
            return layer.msg('购买数量不能低于1件');
        }
        if (val > stock) {
            $(this).val(stock);
            orderNumber = stock;
            return;
            return layer.msg('购买数量不能多余库存数量');
        }
        orderNumber = val;
    })


    //方法定义
    w.showQrcode = function (imgUrl) {
        let html = '<div class="qr" style="">' +
            '<svg t="1602929622714" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7733" data-spm-anchor-id="a313x.7781069.0.i25" width="400" height="400"><path d="M985.3 307.5c-21.4 0-38.7-17.3-38.7-38.7V156.9c0-43.8-35.6-79.4-79.4-79.4H765.7c-21.4 0-38.7-17.3-38.7-38.7S744.3 0 765.7 0h101.4C953.6 0 1024 70.4 1024 156.9v111.9c0 21.4-17.3 38.7-38.7 38.7zM258.3 1024H156.9C70.4 1024 0 953.6 0 867.1V766.5c0-21.4 17.3-38.7 38.7-38.7s38.7 17.3 38.7 38.7v100.6c0 43.8 35.6 79.4 79.4 79.4h101.4c21.4 0 38.7 17.3 38.7 38.7s-17.2 38.8-38.6 38.8zM38.7 296.2C17.3 296.2 0 278.9 0 257.5V156.9C0 70.4 70.4 0 156.9 0h101.4C279.7 0 297 17.3 297 38.7s-17.3 38.7-38.7 38.7H156.9c-43.8 0-79.4 35.6-79.4 79.4v100.6c-0.1 21.5-17.4 38.8-38.8 38.8zM867.1 1024H766.5c-21.4 0-38.7-17.3-38.7-38.7s17.3-38.7 38.7-38.7h100.6c43.8 0 79.4-35.6 79.4-79.4V765.7c0-21.4 17.3-38.7 38.7-38.7s38.7 17.3 38.7 38.7v101.4c0.1 86.5-70.3 156.9-156.8 156.9z" p-id="7734" data-spm-anchor-id="a313x.7781069.0.i26" class="selected" fill="#515151"></path><path d="M779.9 550.7H244.1c-21.4 0-38.7-17.3-38.7-38.7s17.3-38.7 38.7-38.7h535.7c21.4 0 38.7 17.3 38.7 38.7s-17.2 38.7-38.6 38.7z" p-id="7735" data-spm-anchor-id="a313x.7781069.0.i27" class="selected" fill="#515151"></path></svg>' +
            '<img src="' + imgUrl + '" alt=""></div>';
        layer.open({
            type    : 1,
            title   : qrSvg + '扫描二维码 手机下单',
            closeBtn: 2,
            area    : msgArea,
            skin    : 'home-tips',
            anim    : 5,
            shade   : 0.7,
            content : html
        });
    }
    w.tipsMsg = function (title, content) {
        layer.open({
            type    : 1,
            title   : tipsSvg + title,
            closeBtn: 2,
            area    : msgArea,
            skin    : 'home-tips',
            anim    : 5,
            shade   : 0.7,
            content : content
        });
    }
}(window))
console.groupEnd();
