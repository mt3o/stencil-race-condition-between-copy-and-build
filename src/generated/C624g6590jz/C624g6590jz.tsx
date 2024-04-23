
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-624g6590jz',
  shadow: true,
})
export class C624g6590jz {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  