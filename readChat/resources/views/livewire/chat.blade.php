@extends('layouts.app')

@section('content')
<div class="container overflow-hidden">
    <div class="row gx-5">
        <div class="col">
            <div class="p-3 border bg-light">
                <video class="w-100" autoplay loop muted controls>
                    <source src="{{ asset('.mp4') }}" type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="col">
            <div class="p-3 border bg-light">
                <div class="card">
                    <div class="card-header">
                        Chat
                    </div>
                    <div class="card-body">
                        <div class="chat-box" id="chat-box">
                            <!-- Tus mensajes existentes aquí -->

                        </div>
                        <div class="input-group mt-3">
                            <input type="text" class="form-control" id="input-mensaje" placeholder="Escribe tu mensaje...">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button" id="enviar-mensaje">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
@endsection