class UserSerializer
    include JSONAPI::Serializer
    set_id {|object| object.get_token}
  end